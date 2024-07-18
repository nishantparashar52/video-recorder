import {useState} from 'react'
export default function Tabs() {
  const tabData = [
    {
      id: 'HTML',
      displayText: 'HTML',
      tabContent: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.'
    }, 
    {

      id: 'CSS',
      displayText: 'CSS',
      tabContent: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.'

    },
    {

      id: 'JavaScript',
      displayText: 'JavaScript',
      tabContent: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.'

    }
  ]
  const [tabs, setTabs] = useState(tabData[0])
  return (
    <div>
    {tabData.map((tab, _) => {
      const {id, displayText} = tab
      return (
        <button id={id} onClick={() => setTabs(id)} key={id} className={tabs.id === id ? 'active': ''}>{displayText}</button>
      )
    })}
        <p key={id}>{tabs.tabContent}</p>
    </div>
  );
}
