# covidtrack-r 
https://covidtrack-r.herokuapp.com/ 

## About covidtrack-r 
There are already many great COVID-19 trackers online, and I wanted to be part of the community who provides great services to the world. Althought many online COVID-19 trackers are amazing, there were some tools that may be too complex or screen full of data which may overwhelm the users. Hence, I created covidtrack-r which provides simple UI with all the essential data. 

### Usage 
This application shows various graphs of COVID-19 data around the world, such as number of confirmed cases, recovered cases, and deaths. Also, user can choose any country and it will provide details about the country. 

#### Web Version Demo
<img src="https://user-images.githubusercontent.com/46854966/80278362-81e43380-86aa-11ea-973b-614ac2d94f5c.gif" width="85%">

#### Mobile Version Demo
<img src="https://user-images.githubusercontent.com/46854966/80278526-03889100-86ac-11ea-99cf-7ea9caa4a3d6.png" height="40%">

### Built With 
* [React](https://reactjs.org/)
* [React Chart.JS 2](https://github.com/jerairrest/react-chartjs-2) 
* [React CountUp](https://www.npmjs.com/package/react-countup) 
* [axios](https://github.com/axios/axios)

## Getting Started 
### Installation 
1. Clone the repo 
```sh
git clone https://github.com/imko/CovidTracker.git
```
2. Install package dependencies 
```sh
cd CovidTracker 
yarn install 
```
3. Run the application 
```sh 
yarn start 
``` 
4. Go to http://localhost:3000 

## Additional Information 
* Data is updated once a day and fetched from https://covid19.mathdro.id/api 
