class book {
    constructor(author, publishdate, numberofpages, color, numberofphotos) {
        this.avtori = author;
        this.tarigi = publishdate ;
        this.sigrdze = numberofpages ;
        this.feri = color ;
        this.naxatebi = numberofphotos;

    }

    warwerebi(){
        let a = this.sigrdze - this.naxatebi;
        console.log("warweriani gverdebis raodenobaa: " , a);
    }

}

let wigni = new book("giorgi", 2024, 440, "green", 115);

wigni.warwerebi();
