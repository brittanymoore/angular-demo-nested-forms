import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';

import { ParentFormComponent } from './parent-form.component';
import { ChildFormAComponent } from '../child-form-a/child-form-a.component';
import { ChildFormBComponent } from '../child-form-b/child-form-b.component';
import { GrandchildFormComponent } from '../grandchild-form-a/grandchild-form-a.component';

describe('ParentFormComponent', () => {
  let component: ParentFormComponent;
  let fixture: ComponentFixture<ParentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ ParentFormComponent, ChildFormAComponent, ChildFormBComponent, GrandchildFormComponent ]
    });
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ParentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid due to child a', () => {
    expect(component.myForm.controls['child-form-a'].valid).toBe(false);
    expect(component.myForm.valid).toBe(false);
  });

  it('should become valid when child a is removed', () => {
    component.myForm.patchValue({ hideA: true });
    fixture.detectChanges();
    expect(component.myForm.valid).toBe(true);
  });

  describe('ChildFormAComponent', () => {

    it('should be invalid due to grandchild', () => {
      const childFormA = component.myForm.controls['child-form-a'] as FormGroup;
      expect(childFormA.controls['grandchild-form-a'].valid).toBe(false);
    });

    it('should become valid when child and self are valid', () => {
      const childFormA = component.myForm.controls['child-form-a'] as FormGroup;
      childFormA.patchValue({ control1: 'foo', 'grandchild-form-a': { control5: 'foo' }});
      fixture.detectChanges();
      expect(childFormA.controls['grandchild-form-a'].valid).toBe(true);
      expect(childFormA.valid).toBe(true);
    });

    it('should become valid when grandchild is removed and self is valid', () => {
      const childFormA = component.myForm.controls['child-form-a'] as FormGroup;
      childFormA.patchValue({ hideGrandchild: true, control1: 'foo' });
      fixture.detectChanges();
      expect(childFormA.valid).toBe(true);
    });
  });

  describe('Caching', () => {

    it('should keep child values after removal', () => {
      let childFormA = component.myForm.controls['child-form-a'] as FormGroup;
      childFormA.patchValue({ control1: 'foo', control2: 'bar' });
      fixture.detectChanges();
      component.myForm.patchValue({ hideA: true });
      fixture.detectChanges();
      component.myForm.patchValue({ hideA: false });
      fixture.detectChanges();
      childFormA = component.myForm.controls['child-form-a'] as FormGroup;
      expect(childFormA).toBeDefined();
      expect(childFormA.value.control1).toBe('foo');
      expect(childFormA.value.control2).toBe('bar');
    });

    it('should keep grandchild values after removal', () => {
      const childFormA = component.myForm.controls['child-form-a'] as FormGroup;
      childFormA.patchValue({ 'grandchild-form-a': { control5: 'foo' }});
      fixture.detectChanges();
      childFormA.patchValue({ hideGrandchild: true });
      fixture.detectChanges();
      childFormA.patchValue({ hideGrandchild: false });
      fixture.detectChanges();
      expect(childFormA.controls['grandchild-form-a']).toBeDefined();
      expect(childFormA.controls['grandchild-form-a'].value.control5).toBe('foo');
    });
  });
});
