import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import { useTranslation } from 'react-i18next'

const App = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className='Home'>
      <Header/>
      <Navbar/>
      <div className="language-switcher">
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('ja')}>日本語</button>
      </div>
      <h1 className='headings'>JLPT Kanji list</h1>
      <table className="kanji-table">
  <tr>
    <td className="kanji-details"><a id="1">一</a></td>
    <td className="kanji-details"><a id="2">二</a></td>
    <td className="kanji-details"><a id="3">三</a></td>
    <td className="kanji-details"><a id="4">四</a></td>
    <td className="kanji-details"><a id="5">五</a></td>
    <td className="kanji-details"><a id="6">六</a></td>
    <td className="kanji-details"><a id="7">七</a></td>
    <td className="kanji-details"><a id="8">八</a></td>
    <td className="kanji-details"><a id="9">九</a></td>
    <td className="kanji-details"><a id="10">十</a></td>
    <td className="kanji-details"><a id="11">人</a></td>
    <td className="kanji-details"><a id="12">今</a></td>
    <td className="kanji-details"><a id="13">日</a></td>
  </tr>
  <tr>
    <td className="kanji-details"><a id="14">週</a></td>
    <td className="kanji-details"><a id="15">月</a></td>
    <td className="kanji-details"><a id="16">年</a></td>
    <td className="kanji-details"><a id="17">中</a></td>
    <td className="kanji-details"><a id="18">山</a></td>
    <td className="kanji-details"><a id="19">川</a></td>
    <td className="kanji-details"><a id="20">左</a></td>
    <td className="kanji-details"><a id="21">右</a></td>
    <td className="kanji-details"><a id="22">大</a></td>
    <td className="kanji-details"><a id="23">木</a></td>
    <td className="kanji-details"><a id="24">本</a></td>
    <td className="kanji-details"><a id="25">水</a></td>
    <td className="kanji-details"><a id="26">火</a></td>
  </tr>
  <tr>
    <td className="kanji-details"><a id="27">父</a></td>
    <td className="kanji-details"><a id="28">母</a></td>
    <td className="kanji-details"><a id="29">耳</a></td>
    <td className="kanji-details"><a id="30">口</a></td>
    <td className="kanji-details"><a id="31">休</a></td>
    <td className="kanji-details"><a id="32">何</a></td>
    <td className="kanji-details"><a id="33">入</a></td>
    <td className="kanji-details"><a id="34">上</a></td>
    <td className="kanji-details"><a id="35">前</a></td>
    <td className="kanji-details"><a id="36">下</a></td>
    <td className="kanji-details"><a id="37">千</a></td>
    <td className="kanji-details"><a id="38">午</a></td>
    <td className="kanji-details"><a id="39">友</a></td>
  </tr>
  <tr>
    <td className="kanji-details"><a id="40">古</a></td>
    <td className="kanji-details"><a id="41">名</a></td>
    <td className="kanji-details"><a id="42">国</a></td>
    <td className="kanji-details"><a id="43">外</a></td>
    <td className="kanji-details"><a id="44">女</a></td>
    <td className="kanji-details"><a id="45">男</a></td>
    <td className="kanji-details"><a id="46">子</a></td>
    <td className="kanji-details"><a id="47">学</a></td>
    <td className="kanji-details"><a id="48">生</a></td>
    <td className="kanji-details"><a id="49">小</a></td>
    <td className="kanji-details"><a id="50">書</a></td>
    <td className="kanji-details"><a id="51">毎</a></td>
    <td className="kanji-details"><a id="52">先</a></td>
  </tr>
  <tr>
    <td className="kanji-details"><a id="53">会</a></td>
    <td className="kanji-details"><a id="54">万</a></td>
    <td className="kanji-details"><a id="55">円</a></td>
    <td className="kanji-details"><a id="56">出</a></td>
    <td className="kanji-details"><a id="57">分</a></td>
    <td className="kanji-details"><a id="58">北</a></td>
    <td className="kanji-details"><a id="59">半</a></td>
    <td className="kanji-details"><a id="60">南</a></td>
    <td className="kanji-details"><a id="61">土</a></td>
    <td className="kanji-details"><a id="62">多</a></td>
    <td className="kanji-details"><a id="63">天</a></td>
    <td className="kanji-details"><a id="64">安</a></td>
    <td className="kanji-details"><a id="65">少</a></td>
  </tr>
  <tr>    
    <td className="kanji-details"><a id="66">店</a></td>
    <td className="kanji-details"><a id="67">後</a></td>
    <td className="kanji-details"><a id="68">手</a></td>
    <td className="kanji-details"><a id="69">新</a></td>
    <td className="kanji-details"><a id="70">時</a></td>
    <td className="kanji-details"><a id="71">来</a></td>
    <td className="kanji-details"><a id="72">東</a></td>
    <td className="kanji-details"><a id="73">校</a></td>
    <td className="kanji-details"><a id="74">気</a></td>
    <td className="kanji-details"><a id="75">白</a></td>
    <td className="kanji-details"><a id="76">百</a></td>
    <td className="kanji-details"><a id="77">目</a></td>
    <td className="kanji-details"><a id="78">社</a></td>
  </tr>
  <tr>
    <td className="kanji-details"><a id="79">空</a></td>
    <td className="kanji-details"><a id="80">立</a></td>
    <td className="kanji-details"><a id="81">聞</a></td>
    <td className="kanji-details"><a id="82">花</a></td>
    <td className="kanji-details"><a id="83">行</a></td>
    <td className="kanji-details"><a id="84">西</a></td>
    <td className="kanji-details"><a id="85">見</a></td>
    <td className="kanji-details"><a id="86">言</a></td>
    <td className="kanji-details"><a id="87">話</a></td>
    <td className="kanji-details"><a id="88">語</a></td>
    <td className="kanji-details"><a id="89">読</a></td>
    <td className="kanji-details"><a id="90">買</a></td>
    <td className="kanji-details"><a id="91">足</a></td>  
  </tr>
  <tr>
    <td className="kanji-details"><a id="92">車</a></td>
    <td className="kanji-details"><a id="93">道</a></td>
    <td className="kanji-details"><a id="94">金</a></td>
    <td className="kanji-details"><a id="95">長</a></td>
    <td className="kanji-details"><a id="96">間</a></td>
    <td className="kanji-details"><a id="97">雨</a></td>
    <td className="kanji-details"><a id="98">電</a></td>
    <td className="kanji-details"><a id="99">食</a></td>
    <td className="kanji-details"><a id="100">飲</a></td>
    <td className="kanji-details"><a id="101">駅</a></td>
    <td className="kanji-details"><a id="102">高</a></td>
    <td className="kanji-details"><a id="103">魚</a></td>
  </tr>
   
      </table>

    </div>
  )
}

export default App