import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ExpertiesComponent } from './solutions/experties/experties.component';
import { CrimeAnalysisComponent } from './solutions/crime-analysis/crime-analysis.component';
import { WatershedAnalysisComponent } from './solutions/watershed-analysis/watershed-analysis.component';
import { DroneSurveyComponent } from './solutions/drone-survey/drone-survey.component';
import { MineMappingAnalysisComponent } from './solutions/mine-mapping-analysis/mine-mapping-analysis.component';
import { CadastralMappingComponent } from './solutions/cadastral-mapping/cadastral-mapping.component';
import { ContourMappingComponent } from './solutions/contour-mapping/contour-mapping.component';
import { CadMappingComponent } from './solutions/cad-mapping/cad-mapping.component';
import { LidarSurveyComponent } from './solutions/lidar-survey/lidar-survey.component';
import { RealtimeDataProcessingComponent } from './solutions/realtime-data-processing/realtime-data-processing.component';
import { ThreeDGisComponent } from './solutions/three-d-gis/three-d-gis.component';
import { RemoteSensingComponent } from './solutions/remote-sensing/remote-sensing.component';
import { GeospatialDataScienceComponent } from './solutions/geospatial-data-science/geospatial-data-science.component';
import { ServiceListComponent } from './solutions/service-list/service-list.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { DirectorDeskComponent } from './director-desk/director-desk.component';

export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {
    path: 'solutions',
    loadComponent: () =>
      import('./solutions/solutions.component').then((m) => m.SolutionsComponent),children:[
        {path:'experties',component:ExpertiesComponent},
        {path:'crime-analysis',component:CrimeAnalysisComponent},
        {path:'drone-survey',component:DroneSurveyComponent},
        {path:'mine-mapping-analysis',component:MineMappingAnalysisComponent},
        {path:'cadastral-mapping',component:CadastralMappingComponent},
        {path:'watershed-analysis',component:WatershedAnalysisComponent},
        {path:'contour-mapping',component:ContourMappingComponent},
        {path:'cad-mapping',component:CadMappingComponent},
        {path:'lidar-survey',component:LidarSurveyComponent},
        {path:'realtime-data-processing',component:RealtimeDataProcessingComponent},
        {path:'3d-gis',component:ThreeDGisComponent},
        {path:'remote-sensing',component:RemoteSensingComponent},
        {path:'geospatialdata-science',component:GeospatialDataScienceComponent},
        {path:'service-lists',component:ServiceListComponent},

      ]
  },
  {path:'footer',component:FooterComponent},
  {path:'contact',component:ContactComponent},
  {path:'directordesk',component:DirectorDeskComponent}

];
