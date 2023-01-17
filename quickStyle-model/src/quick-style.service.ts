import { Attribute, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuickStyleService {

  constructor() { }

  designSystem: { styles: { ":root": { [key in string]: {} }, "variable": { [key in string]: {} }, all: { [key in string]: {} }, group: { [key in string]: {} } }, componentList: {}[] } = {
    styles: {
      ":root": {

      },
      "variable": {
        "inputSize": {
          "--inputSize-xs": "20px",
          "--inputSize-s": "25px",
          "--inputSize-m": "30px",
          "--InputSize-l": "35px",
          "--InputSize-xl": "40px",
          "--InputSize-xxl": "45px"
        },
        "background-color": {
          "--primary": "#007bff",
          "--secondary": "#6c757d",
          "--success": "#28a745",
          "--warning": "#6200EE",
          "--danger": "#dc3545",
          "--info": "#17a2b8",
          "--light":"#f8f9fa",
          "--dark":"#343a40"
        },
        "radius": {
          "--radius-xs": "2px",
          "--radius-s": "3px",
          "--radius-m": "5px",
          "--radius-l": "8px",
          "--radius-xl": "10px"
        },
        "spacing-border":{
          "--borderSize-xs":"1px",
          "--borderSize-s":"2px",
          "--borderSize-m":"3px",
          "--borderSize-l":"4px",
          "--borderSize-xl":"5px",
        },
        "spacing-padding":{
          "--paddingSize-xs":"2px",
          "--paddingSize-s":"3px",
          "--paddingSize-m":"5px",
          "--paddingSize-l":"10px",
          "--paddingSize-xl":"12px",
        },
      },
      all: {
        default: {
          "box-sizing": "border-box",
          "padding": 0,
          "margin": 0,
          "color": "black",
          "font-family": "sans-serif",
        },
        // hover:{

        // },
        // focus:{

        // },
        // disabled:{

        // }
      },
      group: {
        inputGroup: {
          default: {
            "height": "var(--inputSize-m)",
            "width": "250px", 
            "padding": "4px 10px",
            "border": "var(--borderSize-s) solid var(--primary)",
            "border-radius": "var(--radius-m)",
            "outline": "none",
          },
          hover: {
            "border": "var(--borderSize-xs)solid #4096ff"
          },
          focus: {
            "border": "var(--borderSize-xs) solid #4096ff",
            "box-shadow": "0 0 0 2px rgb(5 145 255 / 20%)"
          },
          disabled: {
            "background-color": "#ccc"
          }
        },
        buttonGroup: {
          default: {
            "padding": "8px 15px",
            "border-radius": "var(--radius-m)",
            "color": "#fff",
            "border": "none",
            "cursor":"pointer",
          },
          hover: {

          },
          focus: {

          },
          active: {

          },
          disabled: {

          }
        },
      }
    },
    componentList: [
      {
        tagName: "input",
        attributes: {
          type: "text",
          placeholder: "text"
        },
        groupName: "inputGroup",
        specific: {  
          default: {
            "border": "1px solid transparent",
            "box-shadow": "0 2px 5px 1px rgb(64 60 67 / 16%)",
            "border-radius": "25px"
          },
          hover: {
            "box-shadow": "0 2px 8px 1px rgb(64 60 67 / 24%)",
            "border": "1px solid rgba(223,225,229,0)"
          },
          focus: {
            "width": "300px",
            "box-shadow": "0 2px 8px 1px rgb(64 60 67 / 24%)",
            "border": "1px solid rgba(223,225,229,0)",
            "transition": "0.3s width"
          },
          disabled: {

          }
        }
      },
      {
        tagName: "input",
        attributes: {
          type: "number",
          placeholder: "number"
        },
        groupName: "inputGroup",
        specific: {
          default: {

          },
          hover: {

          },
          focus: {

          },
          disabled: {

          }
        }
      },
      {
        tagName: "input",
        attributes: {
          type: "email",
          placeholder: "abc@gmail.com"
        },
        groupName: "inputGroup",
        specific: {
          default: {
            "border": "none",
            "border-bottom": "1px solid #8D8D8D",
            "background-color": "#F4F4F4",
            "border-radius": "0px"
          },
          hover: {
            "border": "none",
            "border-bottom": "1px solid #8D8D8D",
          },
          focus: {
            "outline": "2px solid #0F62FE",
            "border": "none"
          },
          disabled: {

          }
        }
      },
      {
        tagName: "input",
        attributes: {
          type: "password",
          placeholder: "password"
        },
        groupName: "inputGroup",
        specific: {
          default: {

          },
          hover: {

          },
          focus: {

          },
          disabled: {

          }
        }
      },
      {
        tagName: "input",
        attributes: {
          type: "date",
        },
        groupName: "inputGroup",
        specific: {
          default: {
            "background-color": "#F4F5F7",
            "border": "1px solid #F4F5F7"
          },
          hover: {
            "background-color": "#F4F5F7",
            "border": "2px solid #EBECF0"
          },
          focus: {
            "background-color": "#fff",
            "box-shadow": "none",

          },
          disabled: {

          }
        }
      },
      {
        tagName: "textarea",
        attributes: {
          placeholder: "textarea"
        },
        groupName: "inputGroup",
        specific: {
          default: {
            "height": "100px",
            "background-color": "#FAFBFC",
            "border": "2px solid #DFE1E6"
          },
          hover: {
            "background-color": "#EBECF0",
            "border": "2px solid #DFE1E6"
          },
          focus: {
            "background-color": "#FFFFFF",
            "border": "2px solid #4C9AFF",
            "box-shadow": "none"
          },
          disabled: {

          }
        }
      },
      {
        tagName: "button",
        attributes: {
          value: "primary"
        },
        textContent: "Primary",
        groupName: "buttonGroup",
        specific: {
          default: {
            "background-color": "var(--primary)",
          },
          hover: {
            "background-color": "#1D4ED8",
          },
          focus: {
            "box-shadow": "0 0 0 3px #93C5FD"
          },
          active: {
            "background-color": "#1E40AF"
          },
          disabled: {
            "opacity": 0.6
          }
        }
      },
      {
        tagName: "button",
        attributes: {
          value: "secondary"
        },
        textContent: "Secondary",
        groupName: "buttonGroup",
        specific: {
          default: {
            "background-color": "var(--secondary)",
            "color": "#1E40AF",
            "border-radius": "20px"
          },
          hover: {
            "background-color": "#DBEAFE",
          },
          focus: {
            "box-shadow": "0 0 0 3px #93C5FD"
          },
          active: {
            "background-color": "#EEF2FF"
          },
          disabled: {
            "opacity": 0.6
          }
        }
      },
      {
        tagName: "button",
        attributes: {
          value: "success"
        },
        textContent: "Success",
        groupName: "buttonGroup",
        specific: {
          default: {
            "background-color": "var(--success)",
          },
          hover: {
            "background-color": "#218838",
            "border": "1px solid #1E7E34"
          },
          focus: {
            "box-shadow": "0 0 0 3px rgb(72 180 97 / 50%)"
          },
          active: {
            "background-color": "#1E7E34",
            "border": "2px solid #1C7430"
          },
          disabled: {
            "opacity": 0.6
          }
        }
      },
      {
        tagName: "button",
        attributes: {
          value: "add"
        },
        textContent: "+",
        groupName: "buttonGroup",
        specific: {
          default: {
            "height": "40px",
            "width": "40px",
            "background-color": "var(--warning)",
            "border-radius": "50%",
            "padding": "0px",
            "font-size": "20px",
            "display": "flex",
            "align-items": "center",
            "justify-content": "center"
          },
          hover: {
            "box-shadow": "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
          },
          focus: {
            "box-shadow": "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
          },
          active: {
            "box-shadow": "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)"
          },
          disabled: {
            "opacity": 0.6
          }
        }
      },
      {
        tagName: "select",
        attributes: {
          name: "colors"
        },
        options: ["Red", "Green", "Blue", "Yellow"],
        groupName: "inputGroup",
        specific: {
          default: {

          },
          hover: {

          },
          focus: {

          },
          disabled: {

          }
        }
      },
      {
        tagName: "input",
        attributes: {
          list: "colors"
        },
        autoSuggest: true,
        options: ["Red", "Green", "Blue", "Yellow"],
        groupName: "inputGroup",
        specific: {
          default: {
            "background-color": "#FAFBFC",
            "border": "2px solid #DFE1E6"
          },
          hover: {
            "background-color": "#EBECF0",
            "border": "2px solid #DFE1E6"
          },
          focus: {
            "background-color": "#FFFFFF",
            "border": "2px solid #4C9AFF",
            "box-shadow": "none"
          },
          disabled: {

          }
        }
      },
      {
        tagName: "input",
        attributes: {
          type: "radio",
          name: "gender",
          id: "man"
        },
        labelName: "man",
        specific: {
          default: {
            "height":"25px",
            "width":"25px",
            "appearance": "none",
            "border": "1px solid black",
            "border-radius": "50%",
            "background-image": "url(http://cdn.onlinewebfonts.com/svg/img_504781.png)",
            "background-size": "cover", 
            "cursor":"pointer",
          },
          hover: {
            "border": "2px solid var(--primary)",
          },
          checked: {
            "background-image": "url(https://www.svgrepo.com/download/88683/woman.svg)",
          },  
          focus:{

          },
          disabled: {
           "opacity":0.6
          }
        }
      },
      {
        tagName: "input",
        attributes: {
          type: "checkbox",
          name: "colors",
          id: "red"
        },
        labelName: "red",
        specific: {
          default: {
            "height":"25px",
            "width":"25px",
            "appearance": "none",
            "border": "1px solid black",
            "background-size": "cover", 
            "cursor":"pointer",
            "border-radius":"var(--radius-m)"
          },
          hover: {
            "border": "2px solid var(--primary)",
          },
          checked: {
            "background-image":"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uRfFFTdwtJBBRDuybKlX1oyQXQjCPa3RVw&usqp=CAU)"
          },
          focus:{

          },
          disabled: {
            "opacity":0.6
          }
        }
      },
    ]
  }

}
