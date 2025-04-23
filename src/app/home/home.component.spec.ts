import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HomeComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('deve renderizar o título "Hello"', () => {
		const h1 = fixture.nativeElement.querySelector('h1');
		expect(h1.textContent).toContain('Hello');
	});

	it('deve ter 5 links no pill-group', () => {
		const pills = fixture.nativeElement.querySelectorAll('.pill');
		expect(pills.length).toBe(5);
	});
});
