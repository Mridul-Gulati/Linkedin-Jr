import React from 'react';
import './Widgets.css';
import { MdInfo } from 'react-icons/md';
import { MdFiberManualRecord } from 'react-icons/md';
function Widgets() {
  const newsArticle =  (heading, subtitle)=>(
    <div className='widgets_article'>
        <div className='widgets_articleLeft'>
            <MdFiberManualRecord/>
        </div>
        <div className='widgets_articleRight'>
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
  )
  return (
    <div className='widgets'>
        <div className='widgets_header'>
            <h2>Linkedin News</h2>
            <MdInfo/>
        </div> 
        {newsArticle("Miku is here","Top news - 999 readers")}
        {newsArticle("Crypto going up?","Top news - 995 readers")}
        {newsArticle("Will crypto crash?","Top news - 992 readers")}
        {newsArticle("Most layoffs in 2023","Top news - 991 readers")}
        {newsArticle("Tesla crashes","Top news - 990 readers")}
        {newsArticle("Welcome to clubhouse","Top news - 900 readers")}
        {newsArticle("Indian stocks surge","Top news - 889 readers")}
        {newsArticle("Elon is mad","Top news - 769 readers")}
        {newsArticle("No more Summers","Top news - 604 readers")}

    </div>
    
  )
}

export default Widgets
