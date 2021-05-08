
## Laravel Role-based Permissions Admin Panel on Zizaco/Entrust Package.

- <p>Zizaco/Entrust is a succinct and flexible way to add Role-based Permissions to Laravel</p>
- <p>To run the application on <b>http://localhost</b>, copy the repository code and run <b>composer install</b> to load all dependencies. </p>
- <p>Create root file <b>.env</b> with your DB seetings based on  <b>.env.example</b>  </p>
- <p>Run <b> php artisan key:generate </b> </p>
- <p>Then use <b> php artisan migrate </b> to migrate databases</p>
- <p>If Entrust migration did not run automatically, run additional command  <b> php artisan entrust:migration </b> to generate the Entrust migration</p>
- <p>When the migration is completed, run the seeding command <b> php artisan db:seed </b> to seed the dummy data, after you may login using login: <b>test@gmail.com</b>, password: <b>testtest</b>. </p>
- <p>Js assets are minified and concatenated with Laravel Mix, source code in <b>/resources/assets</b>, to manage JS dependencies run <b>npm install</b>, to minify js files run <b>npm run production</b>, to automate your build when there is any change use <b>npm run watch </b>
- <p>If encounter error <b>"cross-env not found"</b> , firstly run command <b>npm i cross-env --save</b> </p>
- [Zizaco/Entrust documentation](https://github.com/Zizaco/entrust)  


## Brief overview of the application

## Admin panel with users, assigned roles, descriptions

![Screenshot](public/images/Screenshots/1.png)

## Available roles in dropdown

![Screenshot](public/images/Screenshots/2.png)

## Deleting/detaching a role from selected user

![Screenshot](public/images/Screenshots/3.png)

![Screenshot](public/images/Screenshots/4.png)

## Detecting when admin accidentally tries to assign a role that the user already has

![Screenshot](public/images/Screenshots/5.png)

## Detecting when admin accidentally tries to delete his own admin role

![Screenshot](public/images/Screenshots/6.png)

## Front-end and back-end validation

![Screenshot](public/images/Screenshots/8.png)

![Screenshot](public/images/Screenshots/9.png)

## Form to add new roles

![Screenshot](public/images/Screenshots/7.png)

##Admin panel protected with Entrust RBAC, a view for a non-admin user

![Screenshot](public/images/Screenshots/13.png)

[Watch video presentation on Youtube]( https://youtu.be/CoS-ETa-Uto )
 
  ## Zizaco/Entrust works using 4 tables
- <p><b> roles </b> — stores role records </p>
- <p><b> permissions  </b> — stores permission records </p>
- <p><b> role_user  </b> — stores many-to-many relations between roles and users </p>
- <p><b> permission_role  </b> — stores many-to-many relations between roles and permissions </p>


<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 1500 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell).

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Cubet Techno Labs](https://cubettech.com)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[British Software Development](https://www.britishsoftware.co)**
- **[Webdock, Fast VPS Hosting](https://www.webdock.io/en)**
- **[DevSquad](https://devsquad.com)**
- [UserInsights](https://userinsights.com)
- [Fragrantica](https://www.fragrantica.com)
- [SOFTonSOFA](https://softonsofa.com/)
- [User10](https://user10.com)
- [Soumettre.fr](https://soumettre.fr/)
- [CodeBrisk](https://codebrisk.com)
- [1Forge](https://1forge.com)
- [TECPRESSO](https://tecpresso.co.jp/)
- [Runtime Converter](http://runtimeconverter.com/)
- [WebL'Agence](https://weblagence.com/)
- [Invoice Ninja](https://www.invoiceninja.com)
- [iMi digital](https://www.imi-digital.de/)
- [Earthlink](https://www.earthlink.ro/)
- [Steadfast Collective](https://steadfastcollective.com/)
- [We Are The Robots Inc.](https://watr.mx/)
- [Understand.io](https://www.understand.io/)
- [Abdel Elrafa](https://abdelelrafa.com)
- [Hyper Host](https://hyper.host)
- [Appoly](https://www.appoly.co.uk)
- [OP.GG](https://op.gg)

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
