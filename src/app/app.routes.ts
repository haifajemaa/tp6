import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ProductList } from './components/product-list/product-list';
import { Contact } from './components/contact/contact';
import { Error404 } from './components/error404/error404';

export const routes: Routes = [
    {path:"home", title: "Accueil", component:Home},
{ path:"products", title: "Produits", component:ProductList},
{ path:"contact", title:"Contact", component:Contact},
{ path:"", redirectTo:"home", pathMatch:"full"},
{ path:"**", title:"Erreur", component:Error404}

];
