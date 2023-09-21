class Hello {
    private _name:string = "";
    private _surname:string = "";
    private hello_text:string = "";

    get name():string{
        return this._name;
    }

    set name(_name:string){
        this._name = _name;
    }

    get surname():string{
        return this._surname;
    }

    set surname(_surname:string){
        this._surname = _surname;
    }

    constructor () {
        var hello_text = document.getElementById('hello-text') as HTMLInputElement;


            hello_text!.innerHTML = "Hola Mundo...";
        
    }
}
window.onload = () => {
    new Hello();
};

