export class Quotes {
 public quote:string
 public author:string
 public name: string
 showDetails:boolean

 constructor(quote:string,author:string,name:string, public creationDate:Date){
   this.quote = quote
   this.author = author
   this.name = name;
   this.showDetails = true
 }
}
