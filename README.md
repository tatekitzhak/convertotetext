# convertotetext

### How to get start/run the app:
- 


# List of Routes
```
|Domain                 | Method       | URI                                  | Action  | Name  |
|-----------------------|:------------:| ------------------------------------:| -------:|------:|
| http://localhost:8080 |GET           | /                                    |         |       |
|                       |GET           | /api                                 |         |       |
|                       |GET           | /api/category                        |         |       |
|                       |GET           |/category/subcategory/topics          |         |       |
|                       |GET           |/category/subcategory/topics/article  |         |       |  
```
# Application Structure
```
├── node_modules
├── build
├── public
├── webpack
├── src
|   |── app.jx
|   |── build
|   |  ├── 
|   |  ├── 
│   ├── api
│   │   ├── controller
│   │   │   ├── Auth
│   │   │   │   ├── Login.ts
│   │   │   │   ├── RefreshToken.ts
│   │   │   │   └── Register.ts
│   │   │   └── Home.ts
│   │   ├── middlewares
│   │   │   ├── Login.ts
│   │   │   ├── Logout.ts
│   │   │   ├── Register.ts
│   │   │   └── Social.ts
│   │   ├── routes
│   │   │   ├── Login.ts
│   │   │   ├── Logout.ts
│   │   │   ├── Register.ts
│   │   │   └── Social.ts
│   │   └── index.ts
│   ├── configs
│   │   ├── Handler.ts
│   │   └── NativeEvent.ts
│   ├── db
│   │   ├── models
│   │   │   └── user.ts
│   │   └── vendors
│   │        ├── index.ts
│   │        ├── INext.ts
│   │        ├── IRequest.ts
│   │        └── IResponse.ts
│   ├── services
│   │   ├── CORS.ts
│   │   ├── CsrfToken.ts
│   │   ├── Http.ts
│   │   ├── Kernel.ts
│   │   ├── Log.ts
│   │   ├── Statics.ts
│   │   ├── StatusMonitor.ts
│   │   └── View.ts
│   ├── static
│   │   ├── App.ts
│   │   ├── Cache.ts
│   │   ├── Database.ts
│   │   ├── Express.ts
│   │   ├── Locals.ts
│   │   ├── Passport.ts
│   │   ├── Queue.ts
│   │   └── Routes.ts
│   ├── utils
│   │   └── strategies
│   │        ├── Google.ts
│   │        ├── Local.ts
│   │        └── Twitter.ts
│   └── app.ts
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── index.ts
```
