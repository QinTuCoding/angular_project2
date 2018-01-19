import {
  OnChanges, OnInit, Directive, Input, ComponentFactoryResolver, ViewContainerRef, Type, ComponentRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../models/field.interface';
import { FieldConfig } from '../models/field-config.interface';
import { RmiInputComponent } from '../components/rmi-input/rmi-input.component';

const components: {[type: string]: Type<Field>} = {
  input: RmiInputComponent
};

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[rmiField]'
})
export class RmiFieldDirective implements Field, OnChanges, OnInit {
  @Input() config: FieldConfig;
  @Input() group: FormGroup;
  component: ComponentRef<Field>;
  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) {}

  ngOnInit(): void {
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type(${this.config.type}). Supported types: ${supportedTypes}`
      );
    }
    const component = this.resolver.resolveComponentFactory<Field>(components[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
  ngOnChanges(): void {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }

}
