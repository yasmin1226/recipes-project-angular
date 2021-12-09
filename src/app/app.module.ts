import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Core/header/header.component';
import { FooterComponent } from './Components/Core/footer/footer.component';
import { RecipiesComponent } from './Components/Features/recipies/recipies.component';
import { RecipiesListComponent } from './Components/Features/recipies/recipies-list/recipies-list.component';
import { RecipisDetailComponent } from './Components/Features/recipies/recipis-detail/recipis-detail.component';
import { RecipieItemComponent } from './Components/Features/recipies/recipiesList/recipie-item/recipie-item.component';
import { ShoppingListComponent } from './Components/Features/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './Components/Features/shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RecipiesComponent,
    RecipiesListComponent,
    RecipisDetailComponent,
    RecipieItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
