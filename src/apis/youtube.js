import axios from 'axios'

const KEY = "AIzaSyAUIy-e7ICMqUAeyLTPe5I1ZwU3BIWTvjQ";
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        type:'video',
        key: KEY
    }
});