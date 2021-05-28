//Importar modulos de router de Angular
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 

//Importar componentes a los que se les hace una pagina exclusiva
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';

//Array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/articulo/:id', component: ArticleComponent},
    {path: 'buscar/:search', component: SearchComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'pagina', component: PaginaComponent}, //Se muestra sin parametros
    {path: 'pagina/:nombre', component: PaginaComponent}, //Se muestra con parametros
    {path: '**', component: ErrorComponent} //Debe ser la ultima
];

//Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);