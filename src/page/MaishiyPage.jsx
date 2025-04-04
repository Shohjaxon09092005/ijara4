import React from 'react'
import rasm43 from "../image/Gaz plita.png"
import rasm44 from "../image/chamgyut.png"
import rasm45 from "../image/mikrato'l.png"
import rasm46 from "../image/blendr.png"
import rasm47 from "../image/televizor.png"
import rasm48 from "../image/muzlatgich.png"
import rasm49 from "../image/Kiryuv.png"
import rasm50 from "../image/komp.png"
import rasm51 from "../image/Go'shtmay.png"
import rasm52 from "../image/Printer.png"
import rasm53 from "../image/Kondit.png"
import rasm54 from "../image/Dazmol.png"
import '../style/allServis.css'
import '../style/maishiy.css'
import rasm from '../image/chiziq.png'
import AllCardMaishiy from '../components/AllCardMaishiy'

function MaishiyPage() {
  return (
    <div className='allServis maishiy'>
     <div className="container">
     <span><img src={rasm} alt="" /> <h4>Yangi xaridlar/Maishiy texnika</h4></span>
        <div className="allServis_grid">
        <AllCardMaishiy nomi="Gaz plita" viloyat="Sirdaryo" rasmi={rasm43}/>
        <AllCardMaishiy  nomi="Changyutgich" viloyat="Xorazm" rasmi={rasm44}/>
        <AllCardMaishiy  nomi="Mikrato'lqinli pech" viloyat="Farg'ona" rasmi={rasm45}/>
        <AllCardMaishiy  nomi="Blender" viloyat="Namangan" rasmi={rasm46}/>
        <AllCardMaishiy  nomi="Televizor" viloyat="Andijon" rasmi={rasm47}/>
        <AllCardMaishiy  nomi="Muzlatgich" viloyat="Toshkent" rasmi={rasm48}/>
        <AllCardMaishiy  nomi="Kir yuvish mashinasi" viloyat="Jizzax" rasmi={rasm49}/>
        <AllCardMaishiy  nomi="Kompyuter" viloyat="Samarqand" rasmi={rasm50}/>
        <AllCardMaishiy  nomi="Go'sht maydalagich" viloyat="Navoiy" rasmi={rasm51}/>
        <AllCardMaishiy  nomi="Printer" viloyat="Surxondaryo" rasmi={rasm52}/>
        <AllCardMaishiy  nomi="Konditsioner" viloyat="Qashqadaryo" rasmi={rasm53}/>
        <AllCardMaishiy  nomi="Dazmol" viloyat="Qoraqalpog'iston" rasmi={rasm54}/>
        </div>
     </div>
    </div>
  )
}

export default MaishiyPage
