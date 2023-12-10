import logo from './logo.svg';
import './App.css';
/*App.css import*/

function Header(pros){
    // console.log('pros',pros,pros.title)
    return <header>
            <h1><a href="/">{pros.title}</a></h1>
        </header>
}
function Nav(pros){
    const lis = [
    ]
    for(let i=0;i<pros.topics.length;i++){
        let t = pros.topics[i]; // 아래 상수에서 선언한 데이터
        lis.push(<li key={t.id}><a href={'/read' + t.id}>{t.title}</a></li>)
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
      const topics = [
          {id:1 , title:'html',body:'html is ...'},
          {id:2 , title:'css',body: 'css is ...'},
          {id:3 , title:'javascript',body: 'javascript is ...'}
      ] // 변하지 않는 상수로 만들떄는 const 를 사용한다.

  return (
    <div>
        <Header title="React"></Header> {/*사용자 정의 태그로 Header 를 가져온다.*/}
        <Nav topics={topics}></Nav>
        <Article title="Welcome" body="Hello , WEB"></Article>

    </div>
  );
}

export default App;
