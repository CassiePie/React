import SplitPane from "./SplitPane";
import WelcomeDialog from "./WelcomeDialog";
import RegisterDialog from "./RegisterDialog";
import Modal from "./Modal";
import Card from "./Card";

function App() {

    return (
        <div className="App">

            <Modal title="dit is test">
                <h1>Test</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi alias cupiditate quidem blanditiis reprehenderit optio repellat corrupti. Aperiam adipisci ipsa, velit ullam voluptatum quos delectus voluptate maiores suscipit vitae similique nam assumenda voluptatibus autem perferendis quasi odit ipsum pariatur ratione dignissimos qui dolor molestiae labore! Dolores rerum qui laboriosam blanditiis!</p>
            </Modal>

            <Card>
                <h3>Dit is the content van de card</h3>
            </Card>
            <Card>
                <h3>Dit is nog een andere card</h3>
            </Card>
            <Card>
                <h3>En nog eentje</h3>
            </Card>

            <SplitPane 
                left={<WelcomeDialog />} 
                right={<RegisterDialog />}
            />
            <SplitPane 
                left={<WelcomeDialog />} 
                right={<RegisterDialog />}
            />
            <Modal title="dit is test">
                <h1>Nieuwe Modal</h1>
                <p> aslkdja aslkdjas alsdasd asd</p>            
            </Modal>
            <SplitPane 
                left={<WelcomeDialog />} 
                right={<RegisterDialog />}
            />
            <SplitPane 
                left={<WelcomeDialog />} 
                right={<RegisterDialog />}
            />
            <SplitPane 
                left={<WelcomeDialog />} 
                right={<RegisterDialog />}
            />
        

        </div>
    )
}
export default App;