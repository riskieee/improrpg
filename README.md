# ImproRPG

is a live **IMPRO**visied multiplayer text based **R**ole **P**lay **G**ame adventure story notebook side app

Use it while an online live role playing session for taking notes. So you can easy remember what happened last time and have a nice reminder for your next session.

## DEMO

you can test a demo on: https://improRPG.de/
As this project is in alpha state **please allow 3rd party cookies** as they are NOT FOR TRACKING but as frontend, backend and mongodb are split over own docker container and connected by load a balancer this need cookies until setup under a single domain and a valid ssl certificate...

For local installation this is not needed:

## INSTALLATION

Fork the repository.

In the directory you would like to have the project, clone the repository:

```bash
$ git clone https://github.com/riskieee/improrpg.git
```

Open the project in your coding environment and when having preinstalled docker:

```bash
$ docker-compose up --build
```

## ACCESS IN BROWSER

Open up your /etc/hosts file.

In UNIX and VSCode, it can be opened via the following

```bash
open /etc/hosts
```

In Windows you can use the path `C:\Windows\System32\Drivers\etc\hosts in Windows`

Start notepad as admin and add the following line to your hosts file

```
127.0.0.1 improrpg.localhost
```

## LICENSE

This code is under https://www.gnu.org/licenses/gpl-3.0

MIT LICENSE
Copyright (c) 2021 riskieee

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
