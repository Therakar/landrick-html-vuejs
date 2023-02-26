/* Set up using Vue 3 */
import { createApp } from 'vue';
import App from './App.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */

//icone header
import { faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
library.add(faGithub, faStackOverflow, faMagnifyingGlass, faUser, faChevronDown);

//icone key features cards
import { faLayerGroup, faMobile, faMaximize,faWindowMaximize,faChevronRight } from '@fortawesome/free-solid-svg-icons';
library.add( faLayerGroup,faMaximize,faWindowMaximize,faMobile,faChevronRight);

//icone quickstart
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
library.add( faDollarSign,faCircleCheck);

//icone main card
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
library.add( faArrowRight);

//icone footer
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
library.add( faEnvelope);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

