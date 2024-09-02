let HOSTNAME = window.location.origin;   



if (HOSTNAME !== null && ((HOSTNAME.indexOf('localhost') !== -1) || (HOSTNAME.indexOf('127.0.0.1') !== -1)  ))
  HOSTNAME = "https://contact-app-uihw.onrender.com/"; 
  

const GLOBAL_CONSTANTS = Object.freeze({
    HOSTNAME: HOSTNAME,
    USER_ROLE: {
        SUPERADMIN: "SUPERADMIN",
        DEALER: "DEALER",
        INDIVIDUAL: "INDIVIDUAL"
    },

    USER_TYPE: {
        SELLER: "SELLER",
        BUYER: "BUYER",
        PLATFORM: "PLATFORM"
    },
    
    PAYMENT: {
        PROVIDERS_LIST:[
            {
                name: "Authorize",
                value: "Authorize"
            }
        ],
        DEFAULT_VENDOR: "Authorize",
        PAYMENT_API_URL: "https://test.authorize.net/payment/payment"
    }
})

export default GLOBAL_CONSTANTS;