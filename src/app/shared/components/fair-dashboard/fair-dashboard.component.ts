import { Component, OnInit } from '@angular/core';
import { Ifairs } from '../../models/fairinterface';
import { fairsData } from '../constant/fair';

@Component({
  selector: 'app-fair-dashboard',
  templateUrl: './fair-dashboard.component.html',
  styleUrls: ['./fair-dashboard.component.scss'],
})
export class FairDashboardComponent implements OnInit {
  public fairArray!: Array<Ifairs>;
  public fairObj: Array<Ifairs> | any = [
    {
      fairId: '62f63b4caa0bf10009d0d86a',
      fairName: 'ISS Washington DC Fair',
      startDate: 'Thu 9 February 2023 11:30:00 GMT',
      endDate: 'Sun 12 February 2023 11:30:00 GMT',
      timezoneId: 'Eastern Standard Time',
      location: {
        addressOne: 'Grand Hyatt Washington',
        addressTwo: '1000 H Street NW',
        city: 'Washington D.C.',
        state: 'Washington D.C.',
        country: 'United States',
        zip: '20001',
      },
      numberOfUsersRegistered: 0,
      numberOfSchoolsRegistered: 50,
      isCandidateRegistered: false,
      bannerUrl:
        'https://prod-downloads.issapi.info/fairs/62f63b4caa0bf10009d0d86a/candidateBanner/f5d17ff0-60f6-43af-a0ca-ba74518d21b5.png',
      showRegisteredUsersToCandidate: false,
      showRegisteredUsersToSchools: false,
      showRegisteredSchoolsToCandidate: true,
      showRegisteredSchoolsToSchools: false,
      fairStatus: 'published',
      fairStartTime: '8:00 AM',
      fairEndTime: '12:00 PM',
      type: 'InPerson',
      candidateDescription:
        '<p class="xparagraph"><span class="xnormaltextrun">We are excited to welcome you to Washington DC as we&#10;return to our annual Fair following the AAIE conference. To help launch or&#10;further your international education career, join us to meet international school&#10;leaders, follow school presentations and workshops and receive support on&#10;making recruitment easier for you. This conference draws hundreds of candidates&#10;and recruiters alike, from all over the globe. Come join us and let Washington&#10;DC work its magic for you!</span><span class="xeop">&#160;</span></p><p class="paragraph"><span class="normaltextrun"><b><u><br></u></b></span></p><p class="paragraph"><span class="normaltextrun"><b><u>WASHINGTON DC FAIR SCHEDULE</u></b></span><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="normaltextrun"><b>February 9th</b></span><span></span></p><p class="paragraph"><span class="normaltextrun">8AM-6PM: ISS Event Check-in&#8239;</span><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="normaltextrun">1-5PM: School &amp; Candidate Pre-conference Workshops&#8239;</span><span></span></p><p class="paragraph"><span class="normaltextrun">5:30-7:30PM: School Recruiter Welcome Reception&#8239;&#8239;</span><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="normaltextrun"><b>February 10<sup>th</sup></b></span><span></span></p><p class="paragraph"><span class="normaltextrun">8AM-6:30PM: ISS Event Check-in</span><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="normaltextrun">9-10AM: Candidate Welcome Session #1</span><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="normaltextrun">10:30AM-4:30PM: School Presentations</span><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="normaltextrun">5-7PM: Interview Sign-ups</span><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span>&#160;</span></p><p class="paragraph"><span class="normaltextrun"><b>February 11<sup>th</sup></b></span><span class="normaltextrun"><span>&#8239;</span></span><span class="eop"><span>&#160;</span></span><span></span></p><p class="paragraph"><span class="normaltextrun">8AM-6PM: ISS School and Candidate Office Open</span><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="normaltextrun">8AM-5PM: Interview Day #1&#8239;&#8239;</span><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="normaltextrun">9-10AM: Candidate Welcome Session #2&#8239;</span><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="normaltextrun">5-7PM: School &amp; Candidate Networking Reception&#8239;&#8239;</span><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="normaltextrun"><b>February 12<sup>th</sup> </b></span><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="normaltextrun">8AM-12PM: ISS School and Candidate Office Open&#8239;</span><span class="eop">&#160;</span></p><p class="paragraph"><span>8AM-12PM: </span><span class="normaltextrun">Interview Day #2&#8239;</span><span class="eop">&#160;</span></p>',
      schoolDescription:
        '<p class="xparagraph"><span class="xnormaltextrun">We are excited to welcome you to Washington DC as we&#10;return to our annual Fair following the AAIE conference. To help launch or&#10;further your international education career, join us to meet international school&#10;leaders, follow school presentations and workshops and receive support on&#10;making recruitment easier for you. This conference draws hundreds of candidates&#10;and recruiters alike, from all over the globe. Come join us and let Washington&#10;DC work its magic for you!</span><span class="xeop">&#160;</span></p><p class="paragraph"><span class="normaltextrun"><span><u><br></u></span></span></p><p class="paragraph"><span class="normaltextrun"><span><u>WASHINGTON DC FAIR SCHEDULE</u></span></span><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="normaltextrun"><span>February 9th</span></span><span></span></p><p class="paragraph"><span class="normaltextrun">8AM-6PM: ISS Event Check-in&#8239;</span><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="normaltextrun">1-5PM: School &amp; Candidate Pre-conference Workshops&#8239;</span><span></span></p><p class="paragraph"><span class="normaltextrun">5:30-7:30PM: School Recruiter Welcome Reception&#8239;&#8239;</span><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="normaltextrun"><span>February 10<span>th</span></span></span><span></span></p><p class="paragraph"><span class="normaltextrun">8AM-6:30PM: ISS Event Check-in</span><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="normaltextrun">9-10AM: Candidate Welcome Session #1</span><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="normaltextrun">10:30AM-4:30PM: School Presentations</span><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="normaltextrun">5-7PM: Interview Sign-ups</span><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span>&#160;</span></p><p class="paragraph"><span class="normaltextrun"><span>February 11<span>th</span></span></span><span class="normaltextrun"><span>&#8239;</span></span><span class="eop"><span>&#160;</span></span><span></span></p><p class="paragraph"><span class="normaltextrun">8AM-6PM: ISS School and Candidate Office Open</span><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="normaltextrun">8AM-5PM: Interview Day #1&#8239;&#8239;</span><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="normaltextrun">9-10AM: Candidate Welcome Session #2&#8239;</span><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="normaltextrun">5-7PM: School &amp; Candidate Networking Reception&#8239;&#8239;</span><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="normaltextrun"><span>February 12<span>th</span> </span></span><span class="eop">&#160;</span><span></span></p><p class="paragraph"><span class="normaltextrun">8AM-12PM: ISS School and Candidate Office Open&#8239;</span><span class="eop">&#160;</span></p><p class="xparagraph"><span class="xeop"></span></p><p class="paragraph"><span>8AM-12PM: </span><span class="normaltextrun">Interview Day #2&#8239;</span><span class="eop">&#160;</span></p>',
    }
  ]
  constructor() { }

  ngOnInit(): void {
    this.fairArray = fairsData;
  }
  onFairIdGet(e: string) {
    const find = this.fairArray.find(ele => ele.fairId === e);
    this.fairObj.shift()
    this.fairObj.push(find);
  }
}
