function Person(first,last,id){
    this.firstName = first;
    this.lastName = last;
    this.id = id;
    this.fullname = function(){
        return this.firstName + " " +this.lastName;
    }
}
;