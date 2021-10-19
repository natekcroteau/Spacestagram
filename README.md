
# Spacestagram
> Scroll through the cosmos


## Demo

[Visit Spacestagram](https://app-spacestagram.web.app/)


## General Info

Spacestagram is a minimalistic React web application featuring a feed of 20 random pictures from the NASA Astronomy Picture of the Day API. As a user, you are able to view the picture with corresponding explanatory information, as well as like/unlike each post. Refreshing the application will fetch 20 new posts to view.


## Technologies

* React 
  * Moment.js
  * Read-More React 

* CSS


## Setup

To expand upon Spacestagram, install the frontend directory locally using the following command:
```
git clone git@github.com:natekcroteau/Spacestagram.git
```
Install dependencies once in the directory
```
npm install
```
Run the application
```
npm start
```


## Code Example
```
function displaySpaceCards(){
    if(allSpaceData){
        return allSpaceData.map(spaceData => {
            return <SpaceCard 
                        key={spaceData.date}
                        date={spaceData.date}
                        title={spaceData.title}
                        explanation={spaceData.explanation}
                        imageURL={spaceData.url}
                    />
        })
    }else{
        return null
    }
}
```

## Contact
Created by [Nate Croteau](https://github.com/natekcroteau)
