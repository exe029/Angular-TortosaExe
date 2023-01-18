import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { AuthService, Data, User, DataResponse } from './auth.service';
import { HttpClientModule } from '@angular/common/http';




describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it ('login funcionando', (done) => {
  //   service.login({
  //     email: 'juan.cruz@gmail.com',
  //     password:'Abc123',
  //     // avatar:   '',
  //     // fname:    '',
  //     // lname:    '',
  //     // id:       '',

  //   }).subscribe((Data) => {
  //     expect(Data).toBe(mockLoginUser)
  //     done()


  //   })

});
