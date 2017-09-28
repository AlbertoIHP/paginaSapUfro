define({ "api": [
  {
    "type": "post",
    "url": "/auth",
    "title": "Authenticate",
    "name": "Authenticate",
    "group": "Auth",
    "permission": [
      {
        "name": "master",
        "title": "Master access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic authorization with email and password.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Master access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User <code>access_token</code> to be passed to other requests.</p>"
          },
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Current user's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Master access only or invalid credentials.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/auth/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/facebook",
    "title": "Authenticate with Facebook",
    "name": "AuthenticateFacebook",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Facebook user accessToken.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User <code>access_token</code> to be passed to other requests.</p>"
          },
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Current user's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Invalid credentials.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/auth/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/cursos",
    "title": "Create cursos",
    "name": "CreateCursos",
    "group": "Cursos",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": "<p>Cursos's name.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "description",
            "description": "<p>Cursos's description.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "date",
            "description": "<p>Cursos's date.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "user",
            "description": "<p>Cursos's user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "cursos",
            "description": "<p>Cursos's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Cursos not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/cursos/index.js",
    "groupTitle": "Cursos"
  },
  {
    "type": "delete",
    "url": "/cursos/:id",
    "title": "Delete cursos",
    "name": "DeleteCursos",
    "group": "Cursos",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Cursos not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/cursos/index.js",
    "groupTitle": "Cursos"
  },
  {
    "type": "get",
    "url": "/cursos",
    "title": "Retrieve cursos",
    "name": "RetrieveCursos",
    "group": "Cursos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "cursos",
            "description": "<p>List of cursos.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/cursos/index.js",
    "groupTitle": "Cursos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>Query to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..30",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..100",
            "optional": true,
            "field": "limit",
            "defaultValue": "30",
            "description": "<p>Amount of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "sort",
            "defaultValue": "-createdAt",
            "description": "<p>Order of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>Fields to be returned.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/cursos/:id",
    "title": "Retrieve cursos",
    "name": "RetrieveCursos",
    "group": "Cursos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "cursos",
            "description": "<p>Cursos's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Cursos not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/cursos/index.js",
    "groupTitle": "Cursos"
  },
  {
    "type": "put",
    "url": "/cursos/:id",
    "title": "Update cursos",
    "name": "UpdateCursos",
    "group": "Cursos",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": "<p>Cursos's name.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "description",
            "description": "<p>Cursos's description.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "date",
            "description": "<p>Cursos's date.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "user",
            "description": "<p>Cursos's user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "cursos",
            "description": "<p>Cursos's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Cursos not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/cursos/index.js",
    "groupTitle": "Cursos"
  },
  {
    "type": "post",
    "url": "/password-resets",
    "title": "Send email",
    "name": "SendPasswordReset",
    "group": "PasswordReset",
    "permission": [
      {
        "name": "master",
        "title": "Master access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address to receive the password reset token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Link to redirect user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 202": [
          {
            "group": "Success 202",
            "optional": false,
            "field": "202",
            "description": "<p>Accepted.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/password-reset/index.js",
    "groupTitle": "PasswordReset"
  },
  {
    "type": "put",
    "url": "/password-resets/:token",
    "title": "Submit password",
    "name": "SubmitPasswordReset",
    "group": "PasswordReset",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..",
            "optional": false,
            "field": "password",
            "description": "<p>User's new password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Token has expired or doesn't exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/password-reset/index.js",
    "groupTitle": "PasswordReset"
  },
  {
    "type": "get",
    "url": "/password-resets/:token",
    "title": "Verify token",
    "name": "VerifyPasswordReset",
    "group": "PasswordReset",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Password reset token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Token has expired or doesn't exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/password-reset/index.js",
    "groupTitle": "PasswordReset"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create user",
    "name": "CreateUser",
    "group": "User",
    "permission": [
      {
        "name": "master",
        "title": "Master access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Master access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>User's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "picture",
            "description": "<p>User's picture.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "user",
              "admin"
            ],
            "optional": true,
            "field": "role",
            "defaultValue": "user",
            "description": "<p>User's picture.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Sucess 201": [
          {
            "group": "Sucess 201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Master access only.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "409",
            "description": "<p>Email already registered.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete user",
    "name": "DeleteUser",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Admin access only.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/me",
    "title": "Retrieve current user",
    "name": "RetrieveCurrentUser",
    "group": "User",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User access_token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Retrieve user",
    "name": "RetrieveUser",
    "group": "User",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Retrieve users",
    "name": "RetrieveUsers",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>Query to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..30",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..100",
            "optional": true,
            "field": "limit",
            "defaultValue": "30",
            "description": "<p>Amount of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "sort",
            "defaultValue": "-createdAt",
            "description": "<p>Order of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>Fields to be returned.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of users.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Admin access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/userTakeCourses",
    "title": "Create user take course",
    "name": "CreateUserTakeCourse",
    "group": "UserTakeCourse",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "matriculaEstudiante",
            "description": "<p>User take course's matriculaEstudiante.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "nameCurso",
            "description": "<p>User take course's nameCurso.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userTakeCourse",
            "description": "<p>User take course's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User take course not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/userTakeCourse/index.js",
    "groupTitle": "UserTakeCourse"
  },
  {
    "type": "delete",
    "url": "/userTakeCourses/:id",
    "title": "Delete user take course",
    "name": "DeleteUserTakeCourse",
    "group": "UserTakeCourse",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User take course not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/userTakeCourse/index.js",
    "groupTitle": "UserTakeCourse"
  },
  {
    "type": "get",
    "url": "/userTakeCourses/:id",
    "title": "Retrieve user take course",
    "name": "RetrieveUserTakeCourse",
    "group": "UserTakeCourse",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userTakeCourse",
            "description": "<p>User take course's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User take course not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/userTakeCourse/index.js",
    "groupTitle": "UserTakeCourse"
  },
  {
    "type": "get",
    "url": "/userTakeCourses",
    "title": "Retrieve user take courses",
    "name": "RetrieveUserTakeCourses",
    "group": "UserTakeCourse",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "userTakeCourses",
            "description": "<p>List of user take courses.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/userTakeCourse/index.js",
    "groupTitle": "UserTakeCourse",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "q",
            "description": "<p>Query to search.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..30",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..100",
            "optional": true,
            "field": "limit",
            "defaultValue": "30",
            "description": "<p>Amount of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "sort",
            "defaultValue": "-createdAt",
            "description": "<p>Order of returned items.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "fields",
            "description": "<p>Fields to be returned.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/userTakeCourses/:id",
    "title": "Update user take course",
    "name": "UpdateUserTakeCourse",
    "group": "UserTakeCourse",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>user access token.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "matriculaEstudiante",
            "description": "<p>User take course's matriculaEstudiante.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "nameCurso",
            "description": "<p>User take course's nameCurso.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userTakeCourse",
            "description": "<p>User take course's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User take course not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>user access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/userTakeCourse/index.js",
    "groupTitle": "UserTakeCourse"
  },
  {
    "type": "put",
    "url": "/users/:id/password",
    "title": "Update password",
    "name": "UpdatePassword",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic authorization with email and password.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..",
            "optional": false,
            "field": "password",
            "description": "<p>User's new password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Current user access only.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Update user",
    "name": "UpdateUser",
    "group": "User",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>You must pass <code>access_token</code> parameter or a Bearer Token authorization header to access this endpoint.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>User access_token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>User's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>User's email.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>Current user or admin access only.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/user/index.js",
    "groupTitle": "User"
  }
] });
