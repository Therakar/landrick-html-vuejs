<script>
    export default {
        name: "AppFooterTop",
        data() {
            return {
                footerIcons: [

                    {
                       icon:"icon"
                    },
                    {
                        icon:"icon"
                    },
                    {
                        icon:"icon"
                    },
                    {
                        icon:"icon"
                    }
                ],
                company:[

                    {
                        companyElement:"About us"
                    },
                    {
                        companyElement:"Services"
                    },
                    {
                        companyElement:"Team"
                    },
                    {
                        companyElement:"Pricing"
                    },
                    {
                        companyElement:"Project"
                    },
                    {
                        companyElement:"Careers"
                    },
                    {
                        companyElement:"Blog"
                    },
                    {
                        companyElement:"Login"
                    }
                ],
                usefull:[
                    {
                        usefullLink:"Terms of Services"    
                    },
                    {
                        usefullLink:"Privacy Policy"    
                    },
                    {
                        usefullLink:"Documentation"    
                    },
                    {
                        usefullLink:"Changelog"    
                    },
                    {
                        usefullLink:"Components"    
                    },
                ]
            };
        },
    }
</script>

<template>
    <div class="column logo-col">
        <img src="../../assets/logo-light.png" alt="logo">
        <p>Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect</p>
        <ul class="flex">
            <li v-for="elm in footerIcons">
                {{elm.icon}}
            </li>

        </ul>
    </div>
    <div class="column second-col">
        <h4>Company</h4>
        <ul>
            <li v-for="elm in company">
                <p><span><font-awesome-icon icon= "fa-chevron-right fa-solid"/></span> {{elm.companyElement}}</p>
            </li>
        </ul>
    </div>
    <div class="column third-col">
        <h4>Usefull Link</h4>
        <ul>
            <li v-for="elm in usefull">
                <p>{{elm.usefullLink}}</p>
            </li>
        </ul>
    </div>
    <div class="column newsletter-col">

        <h4>Newsletter</h4>
        <p class="email-instructions">Sign up and receive the latest tips via email.</p>
        <div class="mail-footer-container">
            <label for="email-label" class="form-label">Write your email <span class="asterisk">*</span></label>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3"><font-awesome-icon icon= "fa-envelope fa-regular" class="footer-icon"/></span>
                <input type="email" class="form-control" id="email-label" placeholder="Your email:">
            </div>
        </div>
        <button class="btn btn-subscribe">Subscribe</button>
            
    </div>
</template>

<style lang="scss" scoped>
    .column{
        width: 20%;
    }
    p{
        margin-bottom: 5px;
    }
    
    h4{
        color: #ffffff;
        line-height: 0.8;
        margin-bottom: 20px;
    }
    li{
        margin-bottom: 5px;
        display: flex;
        vertical-align:  middle;
    }
    span{
        padding-right: 10px;
        font-size: 13px;
    }
    .logo-col{
        width: 35%;
        margin-right: 40px;

        img{
            width: 130px;
            margin-bottom: 20px;
        }
        
        .newsletter-col{
            width: 25%;
            
        }
    }
    .asterisk{
        color: red;
    }
    .mail-footer-container{
        p{
            margin-bottom: 5px;
        }
        input, .input-group-text{
            background-color: #27314F;
            border: none;
        }
    }
    .footer-icon{
        color: var(--first-text-color);
    }
    .btn-subscribe{
    width: 100%;
    color: var(--second-text-color);
    background-color: #222E51;
    border: 3px solid #233261;
    padding: 5px 15px;
    } 
    .email-instructions{
                margin-bottom: 20px;
            }
    .form-label{
        color: var(--first-text-color);
    }
</style>