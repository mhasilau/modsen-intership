import { Component } from '@angular/core';

@Component({
  selector: 'app-user-news',
  templateUrl: './user-news.component.html',
  styleUrls: ['./user-news.component.scss'],
})
export class UserNewsComponent {
  speakers = [
    {
      name: 'Иван Бодренков',
      position:
        'Директор ООО "Образовательный центр программирования и высоких технологий',
      time: '10.00',
      theme: 'тема',
    },
    {
      name: 'Наталья Масалитина',
      position: 'Методист, куратор ITeen Academy Gomel',
      time: '10.00',
      theme: '',
    },
    {
      name: 'Сергей Семенцов',
      position: 'Group Manager iTechArt',
      time: '10.00',
      theme: '',
    },
    {
      name: 'Сергей Шейбут',
      position: 'Преподаватель ITeen Academy',
      time: '',
      theme: '',
    },
    {
      name: 'Елена Михайлова',
      position: 'Преподаватель ITeen Academy',
      time: '',
      theme: '',
    },
    {
      name: 'Сергей Галушкин',
      position: 'Преподаватель ITeen Academy',
      time: '',
      theme: '',
    },
    {
      name: 'Ирина Галушкина',
      position: 'Преподаватель ITeen Academy',
      time: '',
      theme: '',
    },
    // {
    //   name: 'Денис Кохно',
    //   position: 'Преподаватель ITeen Academy',
    //   time: '',
    //   theme: '',
    // },
    // {
    //   name: 'Владислав Панкевич',
    //   position: 'Преподаватель ITeen Academy',
    //   time: '',
    //   theme: '',
    // },
    // {
    //   name: 'Галина Тимошкова',
    //   position: 'Преподаватель ITeen Academy',
    //   time: '',
    //   theme: '',
    // },
  ];
}
