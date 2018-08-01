import React from 'react';


const styles = {
    helloWorld:{
        color: 'orange',
        backgroundColor: 'black',
    },
};


// export default (props) => {
//     return <h1> {props.greeting} World</h1>
// }
export default ({arg1 = 'hoge', arg2}) => {
    return <h1> {arg1} {arg2}</h1>
}

// export default ({greeting, to}) => 
//         <h1 style={styles.helloWorld}>
//         {greeting} {to}</h1>
    
// export default () => 
//         <h1 style={styles.helloWorld}>
//         {"www"}
//         </h1>

// 一番シンプルな表示方法
// export default() => <h1>{"www"}</h1>


        // <h1 style={styles.helloWorld}>
        // {greeting} {to}</h1>
    


/* 
タグを増やすことにhタグが合算されるような動きをする

タグの子要素は props.children で参照することができる
*/


