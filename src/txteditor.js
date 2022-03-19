import React, { useCallback } from 'react'
import Quill from 'quill'
import "quill/dist/quill.snow.css"

export default function Txteditor() {

  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],['blockquote', 'code-block'],        // toggled buttons    
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']                                         // remove formatting button
  ];

  const wrapperRef = useCallback((wrapper) => {
    if(wrapper==null) return;
    // we used the useCallback hook to prevent the function from being recreated unless necessary. Use the useCallback Hook to prevent the Todos component from re-rendering needlessly.
    wrapper.innerHTML ="";
    const editor = document.createElement('div');
    wrapper.append(editor);
    var quill = new Quill(editor,{
      modules:{
        toolbar:toolbarOptions
      },
      theme:'snow'
    });
    return ()=>{
      wrapperRef.innerHTML="";
    }
  }, [])
  
  return <div id ="container" ref={wrapperRef}/> 
}
