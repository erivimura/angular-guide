//Importar modulos de router de Angular
import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 

//Importar componentes a los que se les hace una pagina exclusiva
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';

//Array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'pagina', component: PaginaComponent}
];

//Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);
