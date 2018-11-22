import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaAreaComponent } from './media-area.component';


describe('ContentAreaComponent', () => {
let component: MediaAreaComponent;
let fixture: ComponentFixture<MediaAreaComponent>;

beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [MediaAreaComponent]
})
.compileComponents();
}));

beforeEach(() => {
fixture = TestBed.createComponent(MediaAreaComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});

it('should create', () => {
expect(component).toBeTruthy();
});
});
