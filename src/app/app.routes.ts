import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ProductList } from './components/product-list/product-list';
import { Contact } from './components/contact/contact';
import { Error404 } from './components/error404/error404';
import { Presentation } from './components/presentation/presentation';
import { Info } from './components/info/info';

export const routes: Routes = [
    {path:"home", title: "Accueil", component:Home,
        children:[
{ path:"presentation", title:"Presentation", component: Presentation},
{ path:"info", title:"infos", component: Info},
{ path:"", redirectTo:'presentation', pathMatch:'full'}
        ]},
{ path:"products", title: "Produits", component:ProductList},
{ path:"contact", title:"Contact", component:Contact},
{ path:"", redirectTo:"home", pathMatch:"full"},
{ path:"**", title:"Erreur", component:Error404}

];
