// const parent=  React.createElement("div", {id: "parent"},
//      React.createElement("div", {id: "child"},
//          [React.createElement("h1", {}, "Hi iam a h1 tag"), React.createElement("h2", {}, "Hi iam a h2 tag")]
//         ));
const parent = React.createElement("div", {id: "parent"},
     [React.createElement("div", {id: "child"},
        [React.createElement("h1", {}, "Hi iam a h1 tag"),
         React.createElement("h2", {}, "Hi iam a h2 tag")
        ]), 
        React.createElement("div", {id:"child"}, 
        [React.createElement("h1", {}, "Hi iam a h1 tag"), 
         React.createElement("h2", {}, "Hi iam a h2 tag")
        ])
        ])

        // to elimate this messier code we introduce JSX
// const heading = React.createElement("h1", {id: "heading"}, "Hello World")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);