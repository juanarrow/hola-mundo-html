class MyComponent {
    private _title:string = "";
    private _imgUrl:string = "";
    
    get title():string{
        return this._title;
    }

    set title(new_title:string){
        this._title = new_title;
    }

    get imgUrl():string{
        return this._imgUrl;
    }

    set imgUrl(new_img_url:string){
        this._imgUrl = new_img_url;
    }

    getTemplate():string{
        return `<img src=${this.imgUrl}><span>${this.title}</span>`;
    }

}


class Hello {
    private _name:string = "";
    private _surname:string = "";
    private hello_text:string = "";
    private mycomp:MyComponent = new MyComponent();

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
        this.mycomp.title="Bienvenido/a";
        this.mycomp.imgUrl= "data:image/jpeg;base64,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";
        var hello_text = document.getElementById('hello-text');
        var my_comp_tag = document.getElementById('my-comp');
        if(my_comp_tag)
            my_comp_tag.innerHTML = this.mycomp.getTemplate();
        hello_text!.innerHTML = "Hola Mundo...";
        
    }
}
window.onload = () => {
    new Hello();
};

