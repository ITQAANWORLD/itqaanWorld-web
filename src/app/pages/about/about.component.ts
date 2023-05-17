import { Component } from '@angular/core';
import { InfoContainerComponent } from "../../shared/components/info-container/info-container.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-about',
    imports: [InfoContainerComponent, FooterComponent, CommonModule],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
    aboutItems = [
        {
            title: 'ABOUT ITQAAN',
            description: 'Itqaan.world ia an ajr by the second platfrom to serve you, through a simplified dail y digital Journey in your Sadaqa, Zakat and all other shariah complaint financial services.'
        },
        {
            title: 'PROBLEM STATEMENT',
            description: 'Revolutionizing the Islamic finance industry by providing innovative and accessible fintech solutions that align with Islamic values. We aim to promote financial inclusion, sustainability, and social impact through technology, transparency, and ethical practices. Join us in building a more inclusive and equitable financial system that empowers communities around the world'
        },
        {
            title: 'ITQAAN VISION',
            description: 'To be a leading Islamic fintech app that transforms the global financial landscape by providing accessible, innovative, and ethical financial solutions. We aspire to promote financial inclusion and social impact, creating a world where everyone has equal access to Shariah-compliant financial services. We strive to be at the forefront of Islamic finance innovation, setting the standard for transparency, sustainability, and technology. Join us in creating a better financial future for all.'
        }
    ]

}
