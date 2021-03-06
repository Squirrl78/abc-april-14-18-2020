import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoStatFiltersComponent } from './video-stat-filters/video-stat-filters.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: VideoDashboardComponent,
  },
];

@NgModule({
  declarations: [
    VideoDashboardComponent,
    VideoListComponent,
    VideoPlayerComponent,
    VideoStatFiltersComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
