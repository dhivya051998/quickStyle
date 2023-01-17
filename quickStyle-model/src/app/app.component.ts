import { Component } from '@angular/core';
import { QuickStyleService } from 'src/quick-style.service';
import { AfterViewInit, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DesignSystem';
  styleSheet = document.styleSheets[1];
  divParentEle !: HTMLElement;

  @ViewChild('input') inputEle!: ElementRef<HTMLElement>;
  @ViewChild('button') buttonEle!: ElementRef<HTMLElement>;
  @ViewChild('radio') radioEle!: ElementRef<HTMLElement>;

  constructor(public dataService: QuickStyleService, private renderer: Renderer2) { }

  ngOnInit(): void {
    let resetCss = this.dataService.designSystem.styles.all['default'];
    let variableCss= this.dataService.designSystem.styles[':root'];
    let rootVariable=this.dataService.designSystem.styles.variable;
    let rootObj;
    for(const property in rootVariable){
      rootObj = Object.assign(variableCss,rootVariable[property]);
    }
    let groupCss: any = this.dataService.designSystem.styles.group;
    this.generateStylesheetProperty('*', resetCss);
    this.generateStylesheetProperty(":root",rootObj);

    let groupNames: string[] = Object.keys(groupCss);
    
    if (groupNames.length) {
      groupNames.forEach((groupName: string) => {
        this.getStyleSheetProperty(groupCss, groupName);

      })
    }
  }

  ngAfterViewInit(): void {
    this.generateComponentList();
  }
  generateStylesheetProperty(selectorText: string, cssText: any) {
    let cssProp = '';
    for (const [property, value] of Object.entries(cssText)) {
      cssProp  += `${property}: ${value};`;
    }
    this.styleSheet.insertRule(`${selectorText} { ${cssProp} }`, this.styleSheet.cssRules.length);
  }

  getStyleSheetProperty(path: any, propName: string) {
    let states: string[] = Object.keys(path[propName]);
    if (states.length) {
      states.forEach((stateName: string) => {
        if (path[propName].hasOwnProperty(stateName)) {
          if (Object.keys(path[propName][stateName]).length) {
            if (stateName === 'default') {
              if (propName === 'specific') {
                this.generateStylesheetProperty(`${path.tagName}[${Object.keys(path.attributes)[0]}=${Object.values(path.attributes)[0]}]`, path[propName][stateName]);
              }
              else {
                this.generateStylesheetProperty(`.${propName}`, path[propName][stateName]);
                this.generateStylesheetProperty(`.${propName}-${stateName}`, path[propName][stateName]);
              }
            }
            else {
              if (propName === 'specific') {
                this.generateStylesheetProperty(`${path.tagName}[${Object.keys(path.attributes)[0]}=${Object.values(path.attributes)[0]}]:${stateName}`, path[propName][stateName]);

                this.generateStylesheetProperty(`${path.tagName}[${path.tagName}${Object.values(path.attributes)[0]}${stateName}=true]`, path[propName][stateName]);
                this.generateStateComponent(path, stateName);
              }
              else {
                this.generateStylesheetProperty(`.${propName}:${stateName}`, path[propName][stateName]);
                this.generateStylesheetProperty(`.${propName}-${stateName}`, path[propName][stateName])
              }
            }
          }
          else {
            if (stateName !== "default") {
              this.generateStateComponent(path, stateName);
            }
          }
        }
      })
    }
  }

  generateComponentList() {
    let compList = this.dataService.designSystem.componentList;
    let parentElement: HTMLElement;
    compList.forEach((list: any) => {
      this.divParentEle = this.renderer.createElement("div");
      this.divParentEle.classList.add("states"); 
      let element = document.createElement(list.tagName);
      if (Object.keys(list.attributes).length) {
        for (const [key, value] of Object.entries(list.attributes)) {
          element.setAttribute(key, value);
        }
      }
  
      if(list.tagName === "select" && list.hasOwnProperty("options")){
        list.options.forEach((optValue:string) =>{
          let optionEle = document.createElement("option");
          optionEle.setAttribute("value",optValue);
          optionEle.textContent = optValue;
          element.appendChild(optionEle);
        })
      }
      else if(list.tagName === "input" && list.hasOwnProperty("autoSuggest") && list.hasOwnProperty("options")){
        let dataInput = document.createElement("datalist");
        dataInput.setAttribute("id",`${Object.values(list.attributes)[0]}`);
        list.options.forEach((optValue:string) =>{
          let optionEle = document.createElement("option");
          optionEle.setAttribute("value",optValue);
          optionEle.textContent = optValue;
          dataInput.appendChild(optionEle);
        })
        this.divParentEle.appendChild(dataInput);
      }
      if (list.hasOwnProperty("groupName")) {
        element.className = list.groupName;
      }
      if (list.hasOwnProperty("textContent")) {
        element.textContent = list.textContent;
      }
      this.divParentEle.appendChild(element);
      if (list.hasOwnProperty("specific")) {
        this.getStyleSheetProperty(list, 'specific')
      }
      if (list.tagName === "input" || list.tagName === "textarea" || list.tagName === "select") {
        parentElement = this.inputEle.nativeElement
      }
      else if (list.tagName === "button") {
        parentElement = this.buttonEle.nativeElement;
      }
      if(list.tagName === "input" && (list.attributes.type === "radio"||list.attributes.type === "checkbox")){
        parentElement = this.radioEle.nativeElement;
      }
      this.renderer.appendChild(parentElement, this.divParentEle);

    })
  }

  generateStateComponent(compDetails: any, stateName: string) {
    let parentElement;
    let element = document.createElement(compDetails.tagName);
    if (Object.keys(compDetails.attributes).length) {
      for (const [key, value] of Object.entries(compDetails.attributes)) {
        element.setAttribute(key, value);
      }
      element.setAttribute(`${compDetails.tagName}${Object.values(compDetails.attributes)[0]}${stateName}`, true);
    }
    if (compDetails.hasOwnProperty("groupName")) {
      element.classList.add(`${compDetails.groupName}-default`, `${compDetails.groupName}-${stateName}`);
    }
    if (compDetails.hasOwnProperty("textContent")) {
      element.textContent = compDetails.textContent;
    }
    this.divParentEle.appendChild(element);
  }
}
