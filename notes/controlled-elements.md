What are controlled elements in react ?

There are some elements in HTML, generally the form elements, DOM maintain there own state
but if DOM control there state we are not able to maintain or control them with react, to make
that components more controlled we control there state via react using react techniques, such elements
then called as controlled elements in react.

There are three steps in react to make form elements controlled elements - 

step 1 -> create a piece of state for state of that element in react
const [description, setDescription] = useState("");

step 2 -> in the html element give value of html "value" attribute equal to that piece of state
<input type="text" placeholder="Item..." value={description} />

step 3 -> listen to the onChange event on the element and set the value coming from form field in our state as -
 <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
