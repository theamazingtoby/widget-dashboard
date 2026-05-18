import { Component } from '@angular/core';

interface WeatherData {
  city: string;
  temp: number;
  condition: string;
  icon: string;
  humidity: number;
  wind: number;
  feelsLike: number;
  high: number;
  low: number;
}

@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  weather: WeatherData = {
    city: 'San Francisco',
    temp: 68,
    condition: 'Partly Cloudy',
    icon: '⛅',
    humidity: 72,
    wind: 12,
    feelsLike: 65,
    high: 71,
    low: 58,
  };
}
