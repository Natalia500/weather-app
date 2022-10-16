import React from "react";
import sunny from '../../assets/img/sunny.jpg'
import PartlyCloudyDay from '../../assets/img/PartlyCloudyDay.jpg'
import PartlyCloudyNight from '../../assets/img/PartlyCloudyNight.jpg';
import cloudy from '../../assets/img/cloudy.jpg';
import lightRain from '../../assets/img/lightRain.jpg';
import showers from '../../assets/img/showers.jpg';
import heavyShowers from '../../assets/img/heavyShowers.jpg';
import LightRainDay from '../../assets/img/LightRainDay.jpg';
import LightRainNight from '../../assets/img/LightRainNight.jpg';
import thunderstorm from '../../assets/img/thunderstorm.jpg';
import LightSnowFall from '../../assets/img/LightSnowFall.jpg';
import HeavytSnowFall from '../../assets/img/HeavySnowFall.jpg';
import sleet from '../../assets/img/sleet.jpg';

const Signs = () => (
    <div className='signsInfo'>

        <div className='singsWinter'>
            <h2>Weather Forecasting Symbols</h2>

            <img src={sunny} alt="" />
            <h3>Sunny Conditions</h3>
            <p>This symbol, indicating sunny conditions and clear sky.</p>

            <img src={PartlyCloudyDay} alt="" />
            <h3>Partly Cloudy (Day)</h3>
            <p>The day will be mostly sunny with patches of cloud cover during the day.</p>

            <img src={PartlyCloudyNight} alt="" />
            <h3>Partly Cloudy (Night)</h3>
            <p>The night will be mostly clear with patches of cloud cover during the day.</p>


            <img src={cloudy} alt="" />
            <h3>Cloudy</h3>
            <p>An indication that heavy cloud cover is expected throughout the day/night.</p>


            <img src={lightRain} alt="" />
            <h3>Cloudy With Light Showers</h3>
            <p>This symbol normally indicates cloudy conditions with light showers scattered throughout the day. </p>

            <img src={showers} alt="" />
            <h3>Cloudy With Showers</h3>
            <p>Slightly heavier and more persistent showers are associated with this symbol.</p>

            <img src={heavyShowers}  alt="" />
            <h3>Cloudy With Heavy Showers</h3>
            <p>As the symbol and description indicate, heavy, persistent showers can be expected.</p>

            <img src={LightRainDay} alt="" />
            <h3>CPartly Cloudy With Light Showers (Day)</h3>
            <p>The weather will be partly sunny, with some cloud cover & light showers to be expected. Some weather services are now usin</p>

            <img src={LightRainNight} alt="" />
            <h3>Partly Cloudy With Light Showers (Night)</h3>
            <p>It indicates a partly clear night sky, with some cloud cover & light showers to be expected.</p>

            <img src={thunderstorm} alt="" />
            <h3>Thunderstorm</h3>
            <p>Thunderstorms with strong winds, lightning, and heavy rain can be expected.</p>

            <img src={LightSnowFall} alt="" />
            <h3>Light Snow Shower</h3>
            <p>A light shower of snow (a cluster of ice crystals) is expected to fall.</p>

            <img src={HeavytSnowFall} alt="" />
            <h3>Heavy Snow Shower</h3>
            <p>A heavy shower of snow (a cluster of ice crystals) is expected to fall.</p>

            <img src={sleet} alt="" />
            <h3>Sleet</h3>
            <p>When sleet is forecasted, it usually means a combination of rain and snow,
                and even small ice pellets are expected to fall.</p>
        </div>
    </div>
)

export default Signs;