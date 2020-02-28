### for use:
1.  import { createInfomitter } from './components/infomitter';

        to App component
-----------------------------------------
2.  const infomitter = createInfomitter(); 
    activate
-----------------------------------------
3.  const store = {
        one: '1',
        two: '2',
        three: '3'
    }
    creare store object anywhere
-----------------------------------------

4. infomitter.init(store);

    tie-up store with infomitter

-----------------------------------------
5.  <code>
    constructor(props) {
        super(props);
        this.infomitter = Object.prototype.infomitter;
        this.state = this.infomitter.getIc(this, 'two', 'four'); 
    }
    </code>
    use getIc for get props to state in class components inside constructor
    getIc(component, string of properties | or nothing for get all properties)

-----------------------------------------

6.  this.infomitter.setIc({four: '4'});

    use setIc for set props to store

    setIc(object)