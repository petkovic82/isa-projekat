import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DTOAppointment } from 'src/app/modules/model/room.model';
import { RoomService } from 'src/app/modules/services/room.service';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {

  public room: DTOAppointment | undefined;

  constructor(private roomService: RoomService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.roomService.getRoom(params['id']).subscribe(res => {
        this.room = res;
      })
    });
  }
}
