import { Component } from '@angular/core';
import {Footer} from '../footer/footer';
import {Home} from '../home/home';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-menu',
  imports: [Footer, Home, RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {}
