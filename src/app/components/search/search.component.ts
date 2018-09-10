import { Component, OnInit } from '@angular/core';
import { BloodGroup } from '../../model/blood-group';
import { SharedServiceService } from '../../service/shared-service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
bloodGroup: BloodGroup;

  constructor(private sharedService:SharedServiceService) { }

  ngOnInit() {

    this.sharedService.getBloodGroup()
    .subscribe((res) => {
      console.log(res);
      this.bloodGroup = res;
      this.bloodGroup.bloodGroupId=this.bloodGroup.bloodGroupId;
    }
  )
  }

  bloodForm(){};

}
