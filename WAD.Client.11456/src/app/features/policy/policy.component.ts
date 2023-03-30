import { Component } from '@angular/core';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss'],
})
export class PolicyComponent {
  policyList = [
    {
      title: 'User Agreement',
      content:
        "This User Agreement ('Agreement') is between you ('User') and XYZ Inc. ('Company') regarding your use of the Company's website and services. By using the Company's website and services, you agree to the terms of this Agreement. This Agreement covers your use of the Company's website and services, and any related products or services.",
    },
    {
      title: 'Privacy Policy',
      content:
        "This Privacy Policy ('Policy') is between you ('User') and XYZ Inc. ('Company') and outlines how the Company collects, uses, and protects User's personal information. By using the Company's website and services, you agree to the terms of this Policy. This Policy applies to all Users of the Company's website and services, and any related products or services.",
    },
    {
      title: 'Cookie Policy',
      content:
        "This Cookie Policy ('Policy') is between you ('User') and XYZ Inc. ('Company') and outlines how the Company uses cookies on its website. By using the Company's website and services, you agree to the terms of this Policy. This Policy applies to all Users of the Company's website and services, and any related products or services.",
    },
    {
      title: 'Refund Policy',
      content:
        "This Refund Policy ('Policy') is between you ('User') and XYZ Inc. ('Company') and outlines the Company's refund policy for its products and services. By using the Company's products or services, you agree to the terms of this Policy. This Policy applies to all Users of the Company's products and services, and any related products or services.",
    },
    {
      title: 'Intellectual Property Policy',
      content:
        "This Intellectual Property Policy ('Policy') is between you ('User') and XYZ Inc. ('Company') and outlines the Company's policy on intellectual property rights. By using the Company's website and services, you agree to the terms of this Policy. This Policy applies to all Users of the Company's website and services, and any related products or services.",
    },
    {
      title: 'Disclaimer',
      content:
        "This Disclaimer ('Disclaimer') is between you ('User') and XYZ Inc. ('Company') and outlines the Company's disclaimer regarding its website and services. By using the Company's website and services, you agree to the terms of this Disclaimer. This Disclaimer applies to all Users of the Company's website and services, and any related products or services.",
    },
    {
      title: 'DMCA Policy',
      content:
        "This DMCA Policy ('Policy') is between you ('User') and XYZ Inc. ('Company') and outlines the Company's policy for handling claims of copyright infringement under the Digital Millennium Copyright Act ('DMCA'). By using the Company's website and services, you agree to the terms of this Policy. This Policy applies to all Users of the Company's website and services, and any related products or services.",
    },
  ];
}
