<script>
    export default {
        name: "AppQuickstartCard"
    }
</script>

<template>
    <div class="quick-main">
        <div class="quick-selection-container">
            <ul class="quick-selection flex al-cnt">
                <li class="active">npm</li>
                <li>nuget</li>
                <li>spm</li>
                <li>github</li>
            </ul>
            <p><font-awesome-icon icon= "fa-dollar-sign fa solid" class="quick-icon"/> npm install <span class="quick-icon">-g</span> claps.js</p>
            <!-- <font-awesome-icon icon= "" class="quick-icon"/> -->
        </div>
        <div class="flex checks">
            <p><font-awesome-icon icon= "fa-circle-check fa-regular" class="quick-icon"/>Organize your data</p>
            <p><font-awesome-icon icon= "fa-circle-check fa-regular" class="quick-icon"/>Work with any team</p>
        </div>
    </div>
        
</template>

<style lang="scss" scoped>

    .quick-main{
        width: 730px;
        margin: auto;
        margin-bottom: 100px;
        .quick-icon{
            color: var(--text-quick-color);
        }
        .quick-selection-container{
            margin-top: 60px;
            margin-bottom: 25px;
            border-radius: 7px;
            height: 130px;
            padding: 25px;
            background-color: var(--background-first-quick-color);
            .quick-selection{
                padding: 0;
                background-color: var(--background-second-quick-color);
                border: 1px solid var(--background-second-quick-color);
                border-radius: 10px;
                margin-bottom: 20px;
                li{
                    width: 25%;
                    text-align: center;
                    font-size: 20px;
                    color: #ffffff;
                    padding: 5px 0;
                    border-radius: 10px;
                    
                }
                .active{
                    background-color: var(--background-first-quick-color);
                }

                
            }
            
        }
        .checks{
            p{
                margin-right: 60px;
                .quick-icon{
                    margin-right: 10px;
                }
            }
        }
    }
        
</style>