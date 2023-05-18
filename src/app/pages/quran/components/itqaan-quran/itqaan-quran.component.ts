import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoContainerComponent } from "../../../../shared/components/info-container/info-container.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-itqaan-quran',
    standalone: true,
    templateUrl: './itqaan-quran.component.html',
    styleUrls: ['./itqaan-quran.component.scss'],
    imports: [CommonModule, InfoContainerComponent, FooterComponent]
})
export class ItqaanQuranComponent {
  aboutItems = [
    {
        title: 'QURAN',
        description: 'Narrated Abu Hurairah: The Prophet Muhammad (peace be upon him) said, "Allah has not created any disease without also creating its cure, except for one disease." They said, "O Messenger of Allah, what is that disease?" He said, "Old age." They said, "What is the cure for it?" He said, "The remembrance of Allah and reading the Quran." Source: Sunan Ibn Majah, Book 31, Hadith 3387 (Narrated by Abu Hurairah)'
    },
  ];

}
