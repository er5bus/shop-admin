import { isRLTLang } from "../../../i18n"

export const getInitLayoutConfig = () => ({
  "js": {
    "breakpoints": {
      "sm": 576,
      "md": 768,
      "lg": 992,
      "xl": 1200,
      "xxl": 1200
    },
    "colors": {
      "theme": {
        "base": {
          "white": "#ffffff",
          "primary": "#6993FF",
          "secondary": "#E5EAEE",
          "success": "#1BC5BD",
          "info": "#8950FC",
          "warning": "#FFA800",
          "danger": "#F64E60",
          "light": "#F3F6F9",
          "dark": "#212121"
        },
        "light": {
          "white": "#ffffff",
          "primary": "#E1E9FF",
          "secondary": "#ECF0F3",
          "success": "#C9F7F5",
          "info": "#EEE5FF",
          "warning": "#FFF4DE",
          "danger": "#FFE2E5",
          "light": "#F3F6F9",
          "dark": "#D6D6E0"
        },
        "inverse": {
          "white": "#ffffff",
          "primary": "#ffffff",
          "secondary": "#212121",
          "success": "#ffffff",
          "info": "#ffffff",
          "warning": "#ffffff",
          "danger": "#ffffff",
          "light": "#464E5F",
          "dark": "#ffffff"
        }
      },
      "gray": {
        "gray100": "#F3F6F9",
        "gray200": "#ECF0F3",
        "gray300": "#E5EAEE",
        "gray400": "#D6D6E0",
        "gray500": "#B5B5C3",
        "gray600": "#80808F",
        "gray700": "#464E5F",
        "gray800": "#1B283F",
        "gray900": "#212121"
      }
    },
    "fontFamily": "Poppins"
  },
  "loader": {
    "enabled": true,
    "type": "",
    "logo": "/metronic/react/demo2/media/logos/logo-dark-sm.png",
    "message": "Please wait..."
  },
  "toolbar": {
    "display": true
  },
  "header": {
    "self": {
      "width": "fluid",
      "theme": "light",
      "fixed": {
        "desktop": true,
        "mobile": false
      }
    },
    "menu": {
      "self": {
        "display": true,
        "layout": "default",
        "root-arrow": true,
        "icon-style": "duotone"
      },
      "desktop": {
        "arrow": true,
        "toggle": "click",
        "submenu": {
          "theme": "light",
          "arrow": true
        }
      },
      "mobile": {
        "display": false,
        "submenu": {
          "theme": "dark",
          "accordion": false
        }
      }
    }
  },
  "subheader": {
    "display": true,
    "displayDesc": false,
    "displayDaterangepicker": true,
    "layout": "subheader-v6",
    "fixed": false,
    "width": "fluid",
    "clear": false,
    "style": "transparent",
    "breadcrumb": {
      "display": true
    }
  },
  "content": {
    "width": "fluid"
  },
  "brand": {
    "self": {
      "theme": "dark"
    }
  },
  "aside": {
    "self": {
      "theme": "dark",
      "display": true,
      "fixed": true,
      "minimize": {
        "toggle": true,
        "default": false,
        "hoverable": true
      }
    },
    "footer": {
      "self": {
        "display": true
      }
    },
    "menu": {
      "dropdown": false,
      "scroll": true,
      "icon-style": "duotone",
      "submenu": {
        "accordion": true,
        "dropdown": {
          "arrow": true,
          "hover-timeout": 500
        }
      }
    }
  },
  "footer": {
    "self": {
      "fixed": false,
      "width": "fluid"
    },
    "width": "fluid",
    "layout": "compact"
  },
  "extras": {
    "search": {
      "display": true,
      "layout": "dropdown",
      "offcanvas": {
        "direction": isRLTLang() ? isRLTLang() ? "right" : "left" : "left"
      }
    },
    "notifications": {
      "display": false,
      "layout": "dropdown",
      "dropdown": {
        "style": "dark"
      },
      "offcanvas": {
        "directions": isRLTLang() ? "right" : "left",
        "direction": isRLTLang() ? "right" : "left"
      }
    },
    "quick-actions": {
      "display": false,
      "layout": "dropdown",
      "dropdown": {
        "style": "dark"
      },
      "offcanvas": {
        "directions": isRLTLang() ? "right" : "left",
        "direction": isRLTLang() ? "right" : "left"
      }
    },
    "user": {
      "display": true,
      "layout": "dropdown",
      "dropdown": {
        "style": "light"
      },
      "offcanvas": {
        "directions": isRLTLang() ? "right" : "left",
        "direction": isRLTLang() ? "right" : "left"
      }
    },
    "languages": {
      "display": true
    },
    "cart": {
      "display": false,
      "dropdown": {
        "style": "dark"
      },
      "layout": "dropdown",
      "offcanvas": {
        "direction": "dark"
      }
    },
    "quick-panel": {
      "display": false,
      "offcanvas": {
        "directions": isRLTLang() ? "right" : "left",
        "direction": isRLTLang() ? "right" : "left"
      }
    },
    "chat": {
      "display": true
    },
    "toolbar": {
      "display": true
    },
    "scrolltop": {
      "display": true
    }
  },
  "self": {
    "layout": "default",
    "body": {
      "backgroundImage": "bg/bg-10.jpg"
    }
  }
})
