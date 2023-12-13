import logo from './logo.svg';
import './App.css';
/*App.css import*/
import {useState} from "react";

function Header(pros){
    // console.log('pros',pros,pros.title)
    return <header>
            <h1><a href="/" onClick={(event)=>{ // allow function 으로 function 명시를 안하고 함수를 사용하는 방법이다.
                event.preventDefault(); // preventDefault -> 해당 함수를 실행하는 태그의 기본동작을 방지한다. / 즉 클릭시 a 태그의 역할인 reload 가 일어나지 않는다.
                pros.onChangeMode();  // 사용하는 함수를 호출
            }}>{pros.title}</a></h1>
        </header>
}
function Nav(pros){
    const lis = [
    ]
    for(let i=0;i<pros.topics.length;i++){
        let t = pros.topics[i]; // 아래 상수에서 선언한 데이터
        lis.push(<li key={t.id}><a id={t.id} href={'/read' + t.id} onClick={(event)=>{
            event.preventDefault(); // 태그의 기본 기능 실행 방지
            pros.onChangeMode(Number(event.target.id)); // event 를 실행하는 태그의 id 값을 가져온다는 뜻이다.
        }}>{t.title}</a></li>)
    }
    return  <nav>
            <ol>
                {lis}
            </ol>
        </nav>
}

function Article(pros){
    // console.log(pros.title , pros.body)
    return  <article>
            <h2>{pros.title}</h2>
            {pros.body}
        </article>
}
function App() {
      let [mode , setMode] = useState('WELCOME') // mode 는 판단하기 위한 변수 데이터 , setMode 는 영역을 담당하는 함수에서 변경되어지는 데이터
      let [id , setId] = useState('null');
      const topics = [
          {id:1 , title:'html',body:'html is ...'},
          {id:2 , title:'css',body: 'css is ...'},
          {id:3 , title:'javascript',body: 'javascript is ...'}
      ] // 변하지 않는 상수로 만들떄는 const 를 사용한다.
    let content = null;
    if (mode==='WELCOME'){
        content = <Article title="Welcome" body="Hello , WEB"></Article> // 모드에 따라 article 태그 변경
    }else if (mode === 'READ'){
        let title = null;
        let body = null;
        for(let i=0;i<topics.length; i++){
            console.log(topics[i].id , id);
            if (topics[i].id === id){
                // eslint-disable-next-line no-unused-vars
                title = topics[i].title;
                // eslint-disable-next-line no-unused-vars
                body = topics[i].body;
            }
        }
        content = <Article title={title} body={body}></Article>
    }
  return (
    <div>
        <Header title="React" onChangeMode={()=>{
            // alert('Header'); // header 라는 메세지를 경고창으로 띄운다.
            setMode('WELCOME'); // mode 의 값을 바꿔줘도 다시 실행하지 않기 때문에 return 에는 변화가 없다.
        }}></Header> {/*사용자 정의 태그로 Header 를 가져온다.*/}
        <Nav topics={topics} onChangeMode={(id)=>{
            // alert(id);
            setMode('READ'); // 값을 변경할떄는 setMode useState 의 함수를 불러라
            setId(id);
        }}></Nav>
        {/*<Article title="Welcome" body="Hello , WEB"></Article> */}
        {content}
    </div>
  );
}

export default App;
